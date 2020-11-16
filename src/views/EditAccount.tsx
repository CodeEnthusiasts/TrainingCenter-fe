import React from 'react';
import EditAccountButton from '../components/molecules/EditAccountButton';
import H2 from '../components/atoms/H2';
import ChangePhotoButton from '../components/molecules/ChangePhotoButton';
import { Data } from '../ExampleData';
import { theme } from '../theme/mainTheme';
import styled from 'styled-components';
import { RoutePaths } from '../routes';

const EditAccountWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 80px;
`;

export default function EditAccount() {
  
  const { profileImage, ...details }  = Data.UserDetailsEditAccount;

  return (
    <EditAccountWrapper>
      <ChangePhotoButton />
      <H2 style={{ color: theme.colors.secondary.color2 }}>
        Change photo
      </H2>
      { Object.entries(details).map(([detail, value], i) =>
          <EditAccountButton 
            detail={ detail }
            value={ value }
            key={ i }
          />
      )}
    </EditAccountWrapper>
  )
}
