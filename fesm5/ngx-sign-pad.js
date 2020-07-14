import SignaturePad from 'signature_pad';
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input, Directive, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var EImageType = {
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
var SignPadComponent = /** @class */ (function () {
    function SignPadComponent() {
        this.signatureChange = new EventEmitter();
        this._options = {
            dotSize: 1,
            minWidth: 1,
            maxWidth: 2,
            penColor: 'rgb(0, 0, 0)',
            debounceTime: 10
        };
    }
    Object.defineProperty(SignPadComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object.assign(this._options, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignPadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.signaturePad = new SignaturePad(this.canvasElementRef.nativeElement, this.options);
        this.signaturePad.onEnd = (/**
         * @return {?}
         */
        function () {
            _this.signatureChange.emit(_this.signaturePad.toDataURL(_this.type));
        });
    };
    /**
     * @return {?}
     */
    SignPadComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.signaturePad.clear();
        this.signatureChange.emit(this.signaturePad.toDataURL(this.type));
    };
    SignPadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-sign-pad',
                    template: "<canvas #canvasElement libCanvasResize [debounceTime]=\"options?.debounceTime\" [signaturePad]=\"signaturePad\"></canvas>",
                    styles: ["\n  :host {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n  }\n  :host canvas {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    SignPadComponent.ctorParameters = function () { return []; };
    SignPadComponent.propDecorators = {
        signature: [{ type: Input }],
        signatureChange: [{ type: Output }],
        type: [{ type: Input }],
        options: [{ type: Input }],
        canvasElementRef: [{ type: ViewChild, args: ['canvasElement',] }]
    };
    return SignPadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CanvasResizeDirective = /** @class */ (function () {
    function CanvasResizeDirective(canvasElementRef, renderer) {
        this.canvasElementRef = canvasElementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    CanvasResizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var currentSignature = _this.signaturePad.toDataURL(EImageType.PNG);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.resizeCanvas();
                _this.signaturePad.clear();
                /** @type {?} */
                var canvas = _this.canvasElementRef.nativeElement;
                _this.signaturePad.fromDataURL(currentSignature, {
                    ratio: Math.max(window.devicePixelRatio || 1, 1),
                    height: parseFloat(canvas.getAttribute('height')),
                    width: parseFloat(canvas.getAttribute('width'))
                }, (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    if (error) {
                        _this.signaturePad.clear();
                    }
                }));
            }), _this.debounceTime | 100);
        }));
        this.resizeCanvas();
    };
    /**
     * @private
     * @param {?=} initial
     * @return {?}
     */
    CanvasResizeDirective.prototype.resizeCanvas = /**
     * @private
     * @param {?=} initial
     * @return {?}
     */
    function (initial) {
        var _this = this;
        if (initial === void 0) { initial = false; }
        /** @type {?} */
        var canvas = this.canvasElementRef.nativeElement;
        /** @type {?} */
        var container = this.renderer.parentNode(canvas);
        /** @type {?} */
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        if (container.offsetHeight && container.offsetWidth) {
            this.renderer.setAttribute(canvas, 'width', (container.offsetWidth * ratio).toString());
            this.renderer.setAttribute(canvas, 'height', (container.offsetHeight * ratio).toString());
            canvas.getContext('2d').scale(ratio, ratio);
        }
        else if (initial) {
            setTimeout((/**
             * @return {?}
             */
            function () { _this.resizeCanvas(true); }), this.debounceTime | 100);
        }
    };
    CanvasResizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libCanvasResize]'
                },] }
    ];
    /** @nocollapse */
    CanvasResizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CanvasResizeDirective.propDecorators = {
        signaturePad: [{ type: Input }],
        debounceTime: [{ type: Input }]
    };
    return CanvasResizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SignPadModule = /** @class */ (function () {
    function SignPadModule() {
    }
    SignPadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SignPadComponent, CanvasResizeDirective],
                    imports: [],
                    exports: [SignPadComponent]
                },] }
    ];
    return SignPadModule;
}());

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