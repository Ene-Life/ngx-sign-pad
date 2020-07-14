import SignaturePad from 'signature_pad';
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input, Directive, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EImageType = {
    PNG: 'image/png',
    SVG: 'image/svg+xml',
    JPEG: 'image/jpeg',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SignPadComponent {
    constructor() {
        this.signatureChange = new EventEmitter();
        this._options = {
            dotSize: 1,
            minWidth: 1,
            maxWidth: 2,
            penColor: 'rgb(0, 0, 0)',
            debounceTime: 10
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        Object.assign(this._options, value);
    }
    ;
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.signaturePad = new SignaturePad(this.canvasElementRef.nativeElement, this.options);
        this.signaturePad.onEnd = (/**
         * @return {?}
         */
        () => {
            this.signatureChange.emit(this.signaturePad.toDataURL(this.type));
        });
    }
    /**
     * @return {?}
     */
    clear() {
        this.signaturePad.clear();
        this.signatureChange.emit(this.signaturePad.toDataURL(this.type));
    }
}
SignPadComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-sign-pad',
                template: `<canvas #canvasElement libCanvasResize [debounceTime]="options?.debounceTime" [signaturePad]="signaturePad"></canvas>`,
                styles: [`
  :host {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
  }
  :host canvas {
    position: relative;
    height: 100%;
    width: 100%;
  }
  `]
            }] }
];
/** @nocollapse */
SignPadComponent.ctorParameters = () => [];
SignPadComponent.propDecorators = {
    signature: [{ type: Input }],
    signatureChange: [{ type: Output }],
    type: [{ type: Input }],
    options: [{ type: Input }],
    canvasElementRef: [{ type: ViewChild, args: ['canvasElement',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CanvasResizeDirective {
    /**
     * @param {?} canvasElementRef
     * @param {?} renderer
     */
    constructor(canvasElementRef, renderer) {
        this.canvasElementRef = canvasElementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const currentSignature = this.signaturePad.toDataURL(EImageType.PNG);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.resizeCanvas();
                this.signaturePad.clear();
                /** @type {?} */
                const canvas = this.canvasElementRef.nativeElement;
                this.signaturePad.fromDataURL(currentSignature, {
                    ratio: Math.max(window.devicePixelRatio || 1, 1),
                    height: parseFloat(canvas.getAttribute('height')),
                    width: parseFloat(canvas.getAttribute('width'))
                }, (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    if (error) {
                        this.signaturePad.clear();
                    }
                }));
            }), this.debounceTime | 100);
        }));
        this.resizeCanvas();
    }
    /**
     * @private
     * @param {?=} initial
     * @return {?}
     */
    resizeCanvas(initial = false) {
        /** @type {?} */
        const canvas = this.canvasElementRef.nativeElement;
        /** @type {?} */
        const container = this.renderer.parentNode(canvas);
        /** @type {?} */
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        if (container.offsetHeight && container.offsetWidth) {
            this.renderer.setAttribute(canvas, 'width', (container.offsetWidth * ratio).toString());
            this.renderer.setAttribute(canvas, 'height', (container.offsetHeight * ratio).toString());
            canvas.getContext('2d').scale(ratio, ratio);
        }
        else if (initial) {
            setTimeout((/**
             * @return {?}
             */
            () => { this.resizeCanvas(true); }), this.debounceTime | 100);
        }
    }
}
CanvasResizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libCanvasResize]'
            },] }
];
/** @nocollapse */
CanvasResizeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CanvasResizeDirective.propDecorators = {
    signaturePad: [{ type: Input }],
    debounceTime: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SignPadModule {
}
SignPadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SignPadComponent, CanvasResizeDirective],
                imports: [],
                exports: [SignPadComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EImageType, SignPadComponent, CanvasResizeDirective, SignPadModule };

//# sourceMappingURL=ngx-sign-pad.js.map