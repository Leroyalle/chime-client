'use client';
import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { CircleHelp, LogOut, Palette, Settings, User } from 'lucide-react';
import { Avatar } from './avatar';

export const ProfileButton: React.FC = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src="https://avatars.githubusercontent.com/u/158848927?v=4"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {/* FIXME: <Link> вместо <a> */}
        <DropdownItem href="/user/1" key="user" startContent={<User size={20} />}>
          Профиль
        </DropdownItem>
        <DropdownItem href="/settings" key="settings" startContent={<Settings size={20} />}>
          Настройки
        </DropdownItem>
        <DropdownItem href="/theme" key="theme" startContent={<Palette size={20} />}>
          Тема
        </DropdownItem>
        <DropdownItem href="/help" key="help" startContent={<CircleHelp size={20} />}>
          Помощь
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          startContent={<LogOut size={20} />}>
          Выйти
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};