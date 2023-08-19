import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { execPath } from 'process';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    const newDate = new Date();

    response.status(status).json({
      code: status,
      // eslint-disable-next-line prettier/prettier
      timestamp: newDate.toString(),
      path: request.url,
      error: 'Bad Request',
      message,
    });
  }
}
