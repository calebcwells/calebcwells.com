import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillSliderComponent } from './animations/skill-slider.animation';
import { PodcastComponent } from './podcast/podcast.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        AboutComponent,
        SkillsComponent,
        SkillSliderComponent,
        PodcastComponent,
        YoutubeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CollapseModule,
        NgxPageScrollCoreModule.forRoot({ duration: 500 }),
        NgxPageScrollModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
