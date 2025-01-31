import { Component } from '@angular/core';
import { SettingsService, UserDataService, ModalService, SurveyService } from '../../services';
import { AngularFireAuth } from '@angular/fire/auth';
import { SurveyComponent } from '../survey/survey.component';
import { UserDataRequestFlags, VolunteerType } from '../../models/user-data';

@Component({
  templateUrl: './volunteer-settings.component.html'
})
export class VolunteerSettingsComponent {

  public modal: HTMLIonModalElement;
  public VolunteerType = VolunteerType;
  
  constructor(
    public settings: SettingsService,
    public userDataService: UserDataService,
    private angularFireAuth: AngularFireAuth,
    private modalService: ModalService,
    private surveys: SurveyService
  ) { }

  onLogout() {
    // redirection and modal-closing are handled in the auth subscriber in `app.component.ts`
    this.angularFireAuth.auth.signOut();
  }

  async showEditAccountForm() {
    this.modalService.open( SurveyComponent, {
      titleTranslationKey: 'volunteer.forms.editAccount.title',
      successTranslationKey: 'volunteer.forms.editAccount.submitSuccess',
      survey: await this.surveys.editAccountSurvey(),
      onSuccess: () => {
        this.userDataService.fetchUserData( true, UserDataRequestFlags.ALL );
      }
    });
  }
}
