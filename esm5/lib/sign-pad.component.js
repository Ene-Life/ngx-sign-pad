/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import SignaturePad from 'signature_pad';
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
    ;
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
export { SignPadComponent };
if (false) {
    /** @type {?} */
    SignPadComponent.prototype.signature;
    /** @type {?} */
    SignPadComponent.prototype.signatureChange;
    /** @type {?} */
    SignPadComponent.prototype.type;
    /** @type {?} */
    SignPadComponent.prototype.canvasElementRef;
    /** @type {?} */
    SignPadComponent.prototype.signaturePad;
    /**
     * @type {?}
     * @private
     */
    SignPadComponent.prototype._options;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1wYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNpZ24tcGFkLyIsInNvdXJjZXMiOlsibGliL3NpZ24tcGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFvQixZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFJekM7SUFtQ0U7UUFoQlUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBaUJyRCxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLGNBQWM7WUFDeEIsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFyQkQsc0JBQWEscUNBQU87Ozs7UUFJcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFORCxVQUFxQixLQUEwQjtZQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOzs7O0lBcUJGLDZDQUFrQjs7O0lBQWxCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSzs7O1FBQUc7WUFDeEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsMkhBQXVIOzZCQUN4SCw2TEFXUjtpQkFDRjs7Ozs7NEJBR0UsS0FBSztrQ0FDTCxNQUFNO3VCQUVOLEtBQUs7MEJBQ0wsS0FBSzttQ0FRTCxTQUFTLFNBQUMsZUFBZTs7SUEyQjVCLHVCQUFDO0NBQUEsQUF6REQsSUF5REM7U0F6Q1ksZ0JBQWdCOzs7SUFFM0IscUNBQTJCOztJQUMzQiwyQ0FBdUQ7O0lBRXZELGdDQUFtQzs7SUFTbkMsNENBQTRFOztJQUU1RSx3Q0FBa0M7Ozs7O0lBQ2xDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgU2lnbmF0dXJlUGFkIGZyb20gJ3NpZ25hdHVyZV9wYWQnO1xyXG5pbXBvcnQgeyBFSW1hZ2VUeXBlIH0gZnJvbSAnLi9tb2RlbHMvaW1hZ2UtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgU2lnbmF0dXJlUGFkT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL3NpZ25hdHVyZVBhZE9wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc2lnbi1wYWQnLFxyXG4gIHRlbXBsYXRlOiBgPGNhbnZhcyAjY2FudmFzRWxlbWVudCBsaWJDYW52YXNSZXNpemUgW2RlYm91bmNlVGltZV09XCJvcHRpb25zPy5kZWJvdW5jZVRpbWVcIiBbc2lnbmF0dXJlUGFkXT1cInNpZ25hdHVyZVBhZFwiPjwvY2FudmFzPmAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIDpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIDpob3N0IGNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25QYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHNpZ25hdHVyZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBASW5wdXQoKSB0eXBlOiBFSW1hZ2VUeXBlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbHVlOiBTaWduYXR1cmVQYWRPcHRpb25zKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBnZXQgb3B0aW9ucygpIDogU2lnbmF0dXJlUGFkT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhc0VsZW1lbnQnKSBjYW52YXNFbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcclxuXHJcbiAgcHVibGljIHNpZ25hdHVyZVBhZDogU2lnbmF0dXJlUGFkO1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IFNpZ25hdHVyZVBhZE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgZG90U2l6ZTogMSxcclxuICAgICAgbWluV2lkdGg6IDEsXHJcbiAgICAgIG1heFdpZHRoOiAyLFxyXG4gICAgICBwZW5Db2xvcjogJ3JnYigwLCAwLCAwKScsXHJcbiAgICAgIGRlYm91bmNlVGltZTogMTBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQodGhpcy5jYW52YXNFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5vbkVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zaWduYXR1cmVDaGFuZ2UuZW1pdCh0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwodGhpcy50eXBlKSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKXtcclxuICAgIHRoaXMuc2lnbmF0dXJlUGFkLmNsZWFyKCk7XHJcbiAgICB0aGlzLnNpZ25hdHVyZUNoYW5nZS5lbWl0KHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCh0aGlzLnR5cGUpKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==