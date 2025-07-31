import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app/app.module';

@NgModule({
  imports: [ServerModule],
  exports: [AppModule],
})
export class AppServerModule {}

export { AppServerModule as default };
