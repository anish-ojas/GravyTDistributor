import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { NextBtnComponent } from './components/next-btn/next-btn.component';
import { BackNextBtnComponent } from './components/back-next-btn/back-next-btn.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './pages/login/login.component';
import { PlatterComponent } from './pages/platter/platter.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatterCarouselComponent } from './components/platter-carousel/platter-carousel.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { DoneBtnComponent } from './components/done-btn/done-btn.component';
import { ContinueInvestingBtnComponent } from './components/continue-investing-btn/continue-investing-btn.component';
import { ShortByComponent } from './components/short-by/short-by.component';
import { FilterSortBtnComponent } from './components/filter-sort-btn/filter-sort-btn.component';
import { SipOnetimeBtnComponent } from './components/sip-onetime-btn/sip-onetime-btn.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { RiskProfileComponent } from './pages/risk-profile/risk-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { KycComponent } from './pages/kyc/kyc.component';
import { TransactionComponent } from './pages/transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    SubmitBtnComponent,
    NextBtnComponent,
    BackNextBtnComponent,
    FileUploadComponent,
    LoginComponent,
    PlatterComponent,
    HeaderComponent,
    SearchComponent,
    PlatterCarouselComponent,
    BackBtnComponent,
    MakePaymentComponent,
    DoneBtnComponent,
    ContinueInvestingBtnComponent,
    ShortByComponent,
    FilterSortBtnComponent,
    SipOnetimeBtnComponent,
    WithdrawComponent,
    RiskProfileComponent,
    HomeComponent,
    OnboardingComponent,
    KycComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
