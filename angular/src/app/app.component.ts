import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import tippy from 'tippy.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Component({
  selector: 'nb-popover-placements',
  templateUrl: './popover-placements.component.html',
  styles: [`
    :host {
      display: block;
      margin: 4rem 0;
    }

    button {
      margin: 1rem;
    }
  `],
})
export class PopoverPlacementsComponent {
}


export class AppComponent {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  pop = null;
  selectEvent = null;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'event 1', date: '2019-11-29' },
    { title: 'event 2', date: '2019-11-28' }
  ];

  
  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick({el, event, jsEvent, view }) {
    this.selectEvent= event;
    tippy(el, {
      trigger: 'click',
      content: document.getElementById('test')
    });
  }
}
