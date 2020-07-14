import { ElementRef, AfterContentInit, EventEmitter } from '@angular/core';
import SignaturePad from 'signature_pad';
import { EImageType } from './models/image-type.enum';
import { SignaturePadOptions } from './models/signaturePadOptions';
export declare class SignPadComponent implements AfterContentInit {
    signature: string;
    signatureChange: EventEmitter<string>;
    type: EImageType | string;
    options: SignaturePadOptions;
    canvasElementRef: ElementRef;
    signaturePad: SignaturePad;
    private _options;
    constructor();
    ngAfterContentInit(): void;
    clear(): void;
}
