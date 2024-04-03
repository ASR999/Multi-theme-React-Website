import React from 'react'
import {Drawer, DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
        <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme='cyan'
        p={"0"}
        h={10}
        w={10}
        borderRadius={"full"}
        onClick={onOpen}

        >
            <BiMenuAltLeft size={"20"}/>
        </Button>

        <Drawer isOpen = {isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader> VIDEO PROVINCE</DrawerHeader>
                <VStack alignItems={"flex-start"}>
                    <Button onClick = {onClose} variant = {"ghost"}  colorScheme='cyan'>
                        <Link to = {'/'} >Home</Link>
                    </Button>

                    <Button onClick = {onClose} variant = {"ghost"}  colorScheme='cyan'>
                        <Link to = {'/videos'} >Videos</Link>
                    </Button>

                    <Button onClick = {onclose} variant = {"ghost"}  colorScheme='cyan'>
                        <Link to = {'/videos?category=free'} >Free Videos</Link>
                    </Button>

                    <Button onClick = {onClose} variant = {"ghost"}  colorScheme='cyan'>
                        <Link to = {'/upload'} >Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'3'}>
                    <Button onClick = {onClose} colorScheme='cyan'>
                        <Link to = {'/login'}>Log In</Link>
                    </Button>
                    <Button onClick = {onClose} colorScheme='cyan' variant={'outline'}>
                        <Link to = {'/singup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header