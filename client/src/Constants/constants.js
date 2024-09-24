import { MdOutlineDashboard , MdOutlineQueryStats } from "react-icons/md";
import { CiUser , CiSettings } from "react-icons/ci";
import { CgPerformance } from "react-icons/cg";

export const sideNav = [
    {
        id : 1,
        icon : MdOutlineDashboard,
        item : 'Dashboard'
    },
    {
        id : 2 ,
        icon : CiUser,
        item : 'User'
    },
    {
        id : 3 ,
        icon : MdOutlineQueryStats,
        item : 'Statistics'
    },
    {
        id : 4 ,
        icon : CiSettings,
        item : 'Settings'
    }
]