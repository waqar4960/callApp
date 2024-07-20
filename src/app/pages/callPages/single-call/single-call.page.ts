import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallsService } from 'src/app/services/calls.service';

@Component({
  selector: 'app-single-call',
  templateUrl: './single-call.page.html',
  styleUrls: ['./single-call.page.scss'],
})
export class SingleCallPage implements OnInit {
  callId!: any;
  calls: any;
  constructor(
    private callService: CallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.callId = Number(this.route.snapshot.paramMap.get('id'));
    this.calls = this.callService.getCalls(this.callId)[0];
    // console.log(this.calls);
  }
  onGonigCall: any;
}
