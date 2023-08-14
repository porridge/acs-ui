/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MenuToggle, Select, SelectList } from '@patternfly/react-core';

function SelectSingle({
  id,
  value,
  handleSelect,
  isDisabled = false,
  children,
  placeholderText = 'Select a value',
}) {
  const [isOpen, setIsOpen] = useState(false);

  function onSelect(_event, selected) {
    // The mouse event is not useful.
    setIsOpen(false);
    handleSelect(id, selected);
  }

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggle = (toggleRef) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      isDisabled={isDisabled}
    >
      {value || placeholderText}
    </MenuToggle>
  );

  return (
    <Select
      id="single-select"
      isOpen={isOpen}
      selected={value}
      onSelect={onSelect}
      onOpenChange={(_event, isOpen) => setIsOpen(isOpen)}
      toggle={toggle}
      shouldFocusToggleOnSelect
    >
      <SelectList>{children}</SelectList>
    </Select>
  );
}

export default SelectSingle;
