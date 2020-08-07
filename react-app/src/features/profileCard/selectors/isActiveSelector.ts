import { RootState } from 'app/rootReducer';
import { Profile } from '../profileSlice';
import { ProfileTemplateFields } from '../helpers/profileTemplate';
import { WithRequired } from 'app/utils/typeUtils';

export const getIsActiveSelector = (
  profile: WithRequired<Profile, ProfileTemplateFields>
) => (state: RootState): boolean =>
  state.profile.activeProfileId === profile.profileId;
