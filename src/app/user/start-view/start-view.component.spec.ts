import { TestBed, async } from '@angular/core/testing';
import { StartViewComponent } from './start-view.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StartViewComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(StartViewComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(StartViewComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('TripMate');
    });
});
