/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import SignaturePad from 'signature_pad';
export class SignPadComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1wYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNpZ24tcGFkLyIsInNvdXJjZXMiOlsibGliL3NpZ24tcGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFvQixZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFvQnpDLE1BQU0sT0FBTyxnQkFBZ0I7SUFtQjNCO1FBaEJVLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWlCckQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDOzs7OztJQXJCRCxJQUFhLE9BQU8sQ0FBQyxLQUEwQjtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQWlCRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7OztRQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsdUhBQXVIO3lCQUN4SDs7Ozs7Ozs7Ozs7R0FXUjthQUNGOzs7Ozt3QkFHRSxLQUFLOzhCQUNMLE1BQU07bUJBRU4sS0FBSztzQkFDTCxLQUFLOytCQVFMLFNBQVMsU0FBQyxlQUFlOzs7O0lBWjFCLHFDQUEyQjs7SUFDM0IsMkNBQXVEOztJQUV2RCxnQ0FBbUM7O0lBU25DLDRDQUE0RTs7SUFFNUUsd0NBQWtDOzs7OztJQUNsQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFNpZ25hdHVyZVBhZCBmcm9tICdzaWduYXR1cmVfcGFkJztcclxuaW1wb3J0IHsgRUltYWdlVHlwZSB9IGZyb20gJy4vbW9kZWxzL2ltYWdlLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9zaWduYXR1cmVQYWRPcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXNpZ24tcGFkJyxcclxuICB0ZW1wbGF0ZTogYDxjYW52YXMgI2NhbnZhc0VsZW1lbnQgbGliQ2FudmFzUmVzaXplIFtkZWJvdW5jZVRpbWVdPVwib3B0aW9ucz8uZGVib3VuY2VUaW1lXCIgW3NpZ25hdHVyZVBhZF09XCJzaWduYXR1cmVQYWRcIj48L2NhbnZhcz5gLFxyXG4gIHN0eWxlczogW2BcclxuICA6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICA6aG9zdCBjYW52YXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduUGFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBzaWduYXR1cmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogRUltYWdlVHlwZSB8IHN0cmluZztcclxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyh2YWx1ZTogU2lnbmF0dXJlUGFkT3B0aW9ucykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0IG9wdGlvbnMoKSA6IFNpZ25hdHVyZVBhZE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdjYW52YXNFbGVtZW50JykgY2FudmFzRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XHJcblxyXG4gIHB1YmxpYyBzaWduYXR1cmVQYWQ6IFNpZ25hdHVyZVBhZDtcclxuICBwcml2YXRlIF9vcHRpb25zOiBTaWduYXR1cmVQYWRPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgIGRvdFNpemU6IDEsXHJcbiAgICAgIG1pbldpZHRoOiAxLFxyXG4gICAgICBtYXhXaWR0aDogMixcclxuICAgICAgcGVuQ29sb3I6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICBkZWJvdW5jZVRpbWU6IDEwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQgPSBuZXcgU2lnbmF0dXJlUGFkKHRoaXMuY2FudmFzRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQub25FbmQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2lnbmF0dXJlQ2hhbmdlLmVtaXQodGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKHRoaXMudHlwZSkpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCl7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gICAgdGhpcy5zaWduYXR1cmVDaGFuZ2UuZW1pdCh0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwodGhpcy50eXBlKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=