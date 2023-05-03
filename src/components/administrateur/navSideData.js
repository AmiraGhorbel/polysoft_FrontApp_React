import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import ShopIcon from '@material-ui/icons/Shop';
import DescriptionIcon from '@material-ui/icons/Description';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
export const NavSideData = [
    {
        title :"Acceuil",
        icon: <HomeIcon/>,
        link: "/acceuil"
    },
    {
        title :"List Article",
        icon:<ShopIcon/>,
        link: "/articleList"
    },
    {
        title :"List Logiciel",
        icon:<AssignmentIcon/>,
        link: "/logicielList"
    },
    {
        title :"List Activite",
        icon:<LocalActivityIcon/>,
        link: "/listAct"
    },
    {
        title :"List Fournisseur",
        icon:<ContactPhoneIcon/>,
        link: "/listFour"
    },
    {
        title :"List Facture",
        icon:<DescriptionIcon/>,
        link: "/listFact"
    },
    {
        title :"List Client",
        icon:<PersonIcon/>,
        link: "/listClt"
    },
    {
        title :"List Ligne Facture",
        icon:<FileCopyIcon/>,
        link: "/listLig"
    }


]