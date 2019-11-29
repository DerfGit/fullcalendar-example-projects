import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { NbPopoverModule } from '@nebular/theme';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbPopoverModule,
    NbThemeModule.forRoot(),
    FullCalendarModule // import the FullCalendar module! will make the FullCalendar component available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
