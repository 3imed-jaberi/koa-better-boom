/*!
 * koa-better-boom
 *
 *
 * Copyright(c) 2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */
const Boom = require('@hapi/boom')

/**
 * Expose `koaBoom()`.
 */
module.exports = koaBoom

/**
 * Boom response objects in Koa.
 * @inspired https://github.com/scottcorgan/express-boom/blob/master/index.js
 *
 * @api public
 */
function koaBoom () {
  return async (ctx, next) => {
    if (ctx.boom || ctx.response.boom) throw new Error('boom already exists on context object.')

    const boom = {}

    Object.getOwnPropertyNames(Boom).forEach((key) => {
      boom[key] = () => {
        const boomed = Boom[key].apply(boom, arguments)
        const boomedPayloadAndAdditionalResponse = Object.assign(boomed.output.payload, arguments[1])

        ctx.status = boomed.output.statusCode
        ctx.body = boomedPayloadAndAdditionalResponse
      }
    })

    ctx.boom = ctx.response.boom = boom

    await next()
  }
}
