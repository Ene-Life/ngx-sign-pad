import { AfterViewInit, Renderer2, ElementRef } from '@angular/core';
export declare class CanvasResizeDirective implements AfterViewInit {
    private canvasElementRef;
    private renderer;
    private signaturePad;
    private debounceTime?;
    constructor(canvasElementRef: ElementRef<HTMLCanvasElement>, renderer: Renderer2);
    ngAfterViewInit(): void;
    private resizeCanvas;
}
