import { Request, Response, NextFunction } from 'express';

/**
 * @summary
 * Global error handling middleware for Express application
 *
 * @function errorMiddleware
 * @module middleware
 *
 * @param {Error} error - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void} Sends error response to client
 */
export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction): void {
  console.error('Error:', error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    error: {
      code: error.code || 'INTERNAL_ERROR',
      message: message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    },
    timestamp: new Date().toISOString(),
  });
}

/**
 * @summary
 * Creates a standardized error response
 *
 * @function errorResponse
 * @module middleware
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 *
 * @returns {object} Standardized error response object
 */
export function errorResponse(message: string, code?: string) {
  return {
    success: false,
    error: {
      code: code || 'ERROR',
      message: message,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function successResponse
 * @module middleware
 *
 * @param {any} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {object} Standardized success response object
 */
export function successResponse(data: any, metadata?: any) {
  return {
    success: true,
    data: data,
    ...(metadata && { metadata: metadata }),
    timestamp: new Date().toISOString(),
  };
}
