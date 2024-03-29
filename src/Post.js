import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './Post.css'
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray'/>
          <InputOption Icon={ChatOutlinedIcon} title='Chat' color='gray'/>
          <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
          <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
})

export default Post