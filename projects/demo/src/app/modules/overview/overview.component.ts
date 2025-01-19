import { Component, OnInit } from '@angular/core';
import { LogDecorator } from '../../../../../ngx-logger/src/lib/decorators/logger/logger.decorator';
import { LogService } from '../../../../../ngx-logger/src/lib/services/ngx-logger/log.service';

@Component({
  selector: 'app-overview',
  imports: [

  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent implements OnInit {
  constructor() { }

  @LogDecorator()
  ngOnInit(): void {
    LogService.log('OverviewComponent', 'ngOnInit')
  }
  
}
