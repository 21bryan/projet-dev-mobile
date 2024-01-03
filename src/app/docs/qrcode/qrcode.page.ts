import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  public textToCode: string;
  public myAngularxQrCode: string = null;

  constructor() { }

  ngOnInit() {
  }
  createQRCode(){
    this.myAngularxQrCode = this.textToCode;
    this.textToCode =  "";
  }

}
