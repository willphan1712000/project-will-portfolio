'use client'

import Title from '../_components/Title'
import ColorPickerSliderComponent from './_components/ColorPickerSliderComponent'
import DynamicListComponent from './_components/DynamicListComponent'
import InputGoogleComponent from './_components/InputGoogleComponent'
import OptionSliderComponent from './_components/OptionSliderComponent'
import RangeSliderComponent from './_components/RangeSliderComponent'
import SelectComponent from './_components/SelectComponent'
import TableOfContents from './_components/TableOfContents'
import TextAreaComponent from './_components/TextAreaComponent'
import PhoneInputComponent from './_components/PhoneInputComponent'
import FileDropZoneComponent from './_components/FileDropZoneComponent'
import InputFileComponent from './_components/InputFileComponent'
import UploadImageComponent from './_components/UploadImageComponent'
import AvatarComponent from './_components/AvatarComponent'
import ImageEditorComponent from './_components/ImageEditorComponent'
import ButtonComponent from './_components/ButtonComponent'
import ModernButtonComponent from './_components/ModernButtonComponent'
import InfoComponent from './_components/InfoComponent'
import OverlayComponent from './_components/OverlayComponent'
import SpinnerComponent from './_components/SpinnerComponent'
import CalendarComponent from './_components/CalendarComponent'
import AvailabilityScheduleComponent from './_components/AvailabilityScheduleComponent'

const UI = () => {
  return (
    <div className='flex gap-2 w-full flex-row'>
      <div className='lg:w-[80%] w-full'>
        <Title title='UI Components'/>
        <SelectComponent />
        <RangeSliderComponent />
        <ColorPickerSliderComponent />
        <OptionSliderComponent />
        <InputGoogleComponent />
        <DynamicListComponent />
        <TextAreaComponent />
        <PhoneInputComponent />
        <FileDropZoneComponent />
        <InputFileComponent />
        <UploadImageComponent />
        <AvatarComponent />
        <ImageEditorComponent />
        <ButtonComponent />
        <ModernButtonComponent />
        <InfoComponent />
        <OverlayComponent />
        <SpinnerComponent />
        <CalendarComponent />
        <AvailabilityScheduleComponent />
      </div>
      <div className='hidden w-[20%] lg:block'>
        <TableOfContents />
      </div>
    </div>
  )
}

export default UI
