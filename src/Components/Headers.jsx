import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="relative">
            <div className="background-hed">
                <div className="flex justify-between">
                    <img className="fact-logo" src={window.location.origin + "/IMG/logo.svg"} alt="" />
                    <div className="flex flex-col">
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <img className='w-6 mx-2' src={window.location.origin + "/IMG/dashboard/noti.png"} alt="" />
                                <img className='w-6 mx-2' src={window.location.origin + "/IMG/dashboard/g885.png"} alt="" />
                                <img className='w-6 mx-2' src={window.location.origin + "/IMG/dashboard/noti.png"} alt="" />
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>
                                            <div className="p-1  rounded-full out">
                                                <img className='w-10' src={window.location.origin + "/IMG/dashboard/my-profile.png"} alt="" />
                                            </div>
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <div className="px-3 py-2">
                                        <p className='text-xl font-semibold'>Home</p>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div className="px-3 py-2">
                                        <p className='text-xl font-semibold'>Home</p>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div className="px-3 py-2">
                                        <p className='text-xl font-semibold'>Home</p>
                                    </div>
                                </MenuItem>

                            </Menu>
                        </React.Fragment>
                    </div>
                </div>
            </div>
            <div className="input-ser absolute md:w-[75%] sm:w-[60%] w-[60%] top-repsoch  right-4 z-10">
                <div className="rounded-full flex border border-[#9c9ca4]  overflow-hidden nameOFser">
                    <p className='sm:flex px-7 items-center hidden  text-[#9c9ca4] py-2 border-r-[1px]'><AiFillHome className='mx-2' /><span>All&nbsp;Resources</span></p>
                    <input className='px-2 w-full py-2 text-[#9c9ca4] outline-none' type="text" placeholder='Search within all resources' />
                    <CiSearch className='text-2xl relative top-2 right-3' />
                </div>
            </div>
        </div>

    )
}
