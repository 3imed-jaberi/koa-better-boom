const Koa = require('koa')
const Router = require('koa-isomorphic-router')
const request = require('supertest')
const should = require('should')
const koaBoom = require('.')

describe('koa-better-boom', () => {
  it('should loaded ctx.boom and ctx.request.boom', done => {
    const app = new Koa()
      .use(koaBoom())
      .use(ctx => {
        should(ctx.boom).be.ok()
        should(ctx.boom).be.a.Object()
        should(ctx.response.boom).be.equal(ctx.boom)
      })

    request(app.listen()).get('/').end(done)
  })

  it('should find badRequest function', (done) => {
    const app = new Koa()
      .use(koaBoom())
      .use(ctx => {
        should(ctx.response.boom.badRequest).be.ok()
        should(ctx.response.boom.badRequest).be.a.Function()
        should(ctx.response.boom.badRequest).be.equal(ctx.boom.badRequest)
      })

    request(app.listen()).get('/').end(done)
  })

  it('should badRequest function work find', (done) => {
    const app = new Koa()
    const router = Router()

    router.get('/', (ctx) => {
      ctx.boom.badRequest()
    })

    app
      .use(koaBoom())
      .use(router.routes())

    request(app.listen())
      .get('/')
      .expect('Content-Type', /json/)
      .expect({ statusCode: 400, error: 'Bad Request', message: 'Bad Request' })
      .expect(400)
      .end(done)
  })

  it('should throw when exist boom filed inside the ctx/ctx.response', (done) => {
    const app = new Koa()
    const router = Router()

    router.get('/', (ctx) => {
      ctx.boom.badRequest()
    })

    app
      .use(async (ctx, next) => {
        ctx.boom = ctx.response.boom = { reserved: true }
        await next()
      })
      .use(koaBoom())

    request(app.listen())
      .get('/')
      .expect(500)
      .end(done)
  })
})
