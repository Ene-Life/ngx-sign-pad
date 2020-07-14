/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import SignaturePad from 'signature_pad';
import { EImageType } from './models/image-type.enum';
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
export { CanvasResizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CanvasResizeDirective.prototype.signaturePad;
    /**
     * @type {?}
     * @private
     */
    CanvasResizeDirective.prototype.debounceTime;
    /**
     * @type {?}
     * @private
     */
    CanvasResizeDirective.prototype.canvasElementRef;
    /**
     * @type {?}
     * @private
     */
    CanvasResizeDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXJlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2lnbi1wYWQvIiwic291cmNlcyI6WyJsaWIvY2FudmFzLXJlc2l6ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxZQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RDtJQVFFLCtCQUFvQixnQkFBK0MsRUFBVSxRQUFtQjtRQUE1RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQStCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUNoRyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFROzs7UUFBRTs7Z0JBQy9CLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDcEUsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOztvQkFDcEIsTUFBTSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO2dCQUNsRCxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFDNUM7b0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRDs7OztnQkFDRCxVQUFDLEtBQUs7b0JBQ0osSUFBSSxLQUFLLEVBQUU7d0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDM0I7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDUCxDQUFDLEdBQUUsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFTyw0Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsT0FBd0I7UUFBN0MsaUJBWUM7UUFab0Isd0JBQUEsRUFBQSxlQUF3Qjs7WUFDckMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhOztZQUM1QyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOztZQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RCxJQUFJLFNBQVMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDMUYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxPQUFPLEVBQUU7WUFDbEIsVUFBVTs7O1lBQUMsY0FBUSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dCQVJDLFVBQVU7Z0JBRFYsU0FBUzs7OytCQVlSLEtBQUs7K0JBQ0wsS0FBSzs7SUEwQ1IsNEJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTdDWSxxQkFBcUI7Ozs7OztJQUVoQyw2Q0FBNEM7Ozs7O0lBQzVDLDZDQUF1Qzs7Ozs7SUFFM0IsaURBQXVEOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFNpZ25hdHVyZVBhZCBmcm9tICdzaWduYXR1cmVfcGFkJztcclxuaW1wb3J0IHsgRUltYWdlVHlwZSB9IGZyb20gJy4vbW9kZWxzL2ltYWdlLXR5cGUuZW51bSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsaWJDYW52YXNSZXNpemVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVzaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByaXZhdGUgc2lnbmF0dXJlUGFkOiBTaWduYXR1cmVQYWQ7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBkZWJvdW5jZVRpbWU/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD4sIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2lnbmF0dXJlID0gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKEVJbWFnZVR5cGUuUE5HKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKGN1cnJlbnRTaWduYXR1cmUsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJhdGlvOiBNYXRoLm1heCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAxKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUZsb2F0KGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSxcclxuICAgICAgICAgICAgd2lkdGg6IHBhcnNlRmxvYXQoY2FudmFzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIHRoaXMuZGVib3VuY2VUaW1lIHwgMTAwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzaXplQ2FudmFzKGluaXRpYWw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoY2FudmFzKTtcclxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5tYXgod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSwgMSk7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgJiYgY29udGFpbmVyLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNhbnZhcywgJ3dpZHRoJywgKGNvbnRhaW5lci5vZmZzZXRXaWR0aCAqIHJhdGlvKS50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoY2FudmFzLCAnaGVpZ2h0JywgKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKiByYXRpbykudG9TdHJpbmcoKSk7XHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNjYWxlKHJhdGlvLCByYXRpbyk7XHJcbiAgICB9IGVsc2UgaWYgKGluaXRpYWwpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucmVzaXplQ2FudmFzKHRydWUpIH0sIHRoaXMuZGVib3VuY2VUaW1lIHwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==