import React, {FC, useState} from 'react'
import H1 from '../../atoms/H1'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'
import FormButton from '../../atoms/FormButton'
import RadioButton from '../../atoms/RadioButton'
import FilterBookmark from './../../molecules/FilterBookmark/index';
import { theme } from '../../../theme/mainTheme'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SortingOptions } from './sortingOptions'
import { filterBookmarks } from './filterBookmarks'
import { 
  RadioForm,
  ModalHeader, 
  ModalWrapper,
  FiltersButtons,
} from './style'

interface IFIltersModal {
  ToggleFiltersModal: () => void;
}

type Inputs = {
  sortValues?: string,
  Muscles?: string,
};

const defaultValues = {
  sortValues: "",
  Muscles: "",
};

const FiltersModal:FC<IFIltersModal> = ({ToggleFiltersModal}): JSX.Element => {
  const { register, handleSubmit, watch } = useForm<Inputs>({defaultValues});

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }; 
  return (
    <ModalWrapper onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader>
        <H1>Sort by</H1>
        <Button radius={50} onClick={ToggleFiltersModal}>
          <Icon color={theme.colors.secondary.color2} className="fas fa-times"></Icon>
        </Button>
      </ModalHeader>
        <RadioForm> 
          {SortingOptions.map((e) => {
           return <RadioButton 
              id={e.id}
              key= {e.id}
              register={register}
              name="sortValues"
              label={e.label}
              labelDetails={e.labelDetails}>
            </RadioButton>
          })}
        </RadioForm>
          {filterBookmarks.map((bookmark, idx) => {
            return <FilterBookmark 
              key={`${bookmark}_${idx}`} 
              label={bookmark.name} 
              items={bookmark.items} 
              register={register} 
              watch={watch}
            />
          })}
          <FiltersButtons>

            <FormButton onClick={() => console.log('clear')}>
              Clear
            </FormButton>
            <FormButton secondary onClick={ToggleFiltersModal}>
              Submit
            </FormButton>
            
          </FiltersButtons>
    </ModalWrapper>
  )
}

export default FiltersModal
