import React, {FC, useState} from 'react'
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';
import RadioButton from './../../atoms/RadioButton';
import { theme } from '../../../theme/mainTheme';
import { IFilterBookmark } from './../../../__types__/IFilterBookmark';
import { 
  BookmarkWrapper, 
  BookmarkItems, 
}  from './style'

const FilterBookmark:FC<IFilterBookmark> = ({label, items, register, watch}) => {
  const [ isBookMarkExpanded, setBookMarkExpansion ] = useState<boolean>(false);

  const ToggleBookMark = (): void => {
    setBookMarkExpansion(!isBookMarkExpanded)
  };
  // console.log(watch("Muscles"));
  return (
    <>
      <BookmarkWrapper isBookMarkExpanded={isBookMarkExpanded} onClick = {() => ToggleBookMark()}>
        <Icon 
          size={3}
          color={`${isBookMarkExpanded  ? "#000" : theme.colors.secondary.color1 }`}
          className={`${isBookMarkExpanded  ? "fas fa-angle-up" : "fas fa-angle-down"}`} />
          <P color={`${isBookMarkExpanded  ? "#000" : theme.colors.secondary.color1 }`}>
            {label}
          </P>
      </BookmarkWrapper>
      { isBookMarkExpanded && <BookmarkItems>
        {items.map((item, idx) => {
          return <RadioButton 
            id={item} 
            key={`${item}_${idx}`} 
            name={label} 
            label={item.charAt(0).toUpperCase() + item.slice(1)} 
            register={register}
          />
        })}
      </BookmarkItems>} 
    </>
  )
}

export default FilterBookmark;
