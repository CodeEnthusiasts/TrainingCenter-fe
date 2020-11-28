import React, { FC } from "react";
import { SearchField, StyledIcon, StyledInput} from './style'
import {theme } from '../../../theme/mainTheme'
import { ISearchBox } from '../../../__types__/ISearchBox'

const SearchBox:FC<ISearchBox> = ({name, placeholder, valueSetter}) => {
  return (
    <SearchField>
      <StyledIcon size={2} className="fas fa-search" color={theme.colors.secondary.color2} />
      <StyledInput
        onChange={(e) => valueSetter(e.target.value)} 
        name={name} 
        placeholder={placeholder} 
        />
  </SearchField> 
  )
}

export default SearchBox
