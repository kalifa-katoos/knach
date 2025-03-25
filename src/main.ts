import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `
        <h1>Debt and Payment Tracker</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
}

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});
