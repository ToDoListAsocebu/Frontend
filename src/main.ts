import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouting } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrConfig } from 'ngx-toastr';

const toastrConfig: Partial<ToastrConfig> = {
  timeOut: 3000, 
  positionClass: 'toast-bottom-right', 
  progressBar: true, 
};

bootstrapApplication(AppComponent, {
  providers: [
    ...appRouting,
    provideHttpClient(),
    provideAnimations(),
    provideToastr(toastrConfig),
  ]
}).catch(err => console.error(err));
