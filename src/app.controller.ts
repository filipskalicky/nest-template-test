import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import MyView, { MyViewProps } from './views/my-view';

@Controller()
export class AppController {
  @Get('*')
  root(@Res() res: Response, @Param() url: string) {
    // Object.keys(MyView.propTypes).forEach((key) => {
    //   console.log(key);
    // });
    return res.render('homepage', { title: url[0], name: 'world' });
  }
  // @Render('my-view.tsx')
  // index(): MyViewProps {
  //   return { title: 'title', name: 'world' };
  // }
}
