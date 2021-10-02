import cn from "classnames";
import style from "./Pagination.module.scss";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import usePagination from '../../../hooks/usePagination'

export default function ({ className, count = 1, totalCount=1 }) {
  const {pages:pagesCount,currentIndex,actions:{updateCurrentPage}}= usePagination(count,totalCount )
  const [pages,setPages] = useState(new Array(pagesCount))

  useEffect(()=>{
    let pagesByCount = []
    for(let index= 0; index < pagesCount; index++) pagesByCount.push(index + 1)
    setPages(pagesByCount)
  },[pagesCount])

  if(pages.length <= 1) return null

  return (
    <div className={cn(className, style.root)}>
      <Button className={cn(style.control, style.controlPrev)}>
        <Icon icon={faAngleLeft} />
      </Button>
      <div className={style.pagesGroup}>
        {pages.map((page)=>(
          <Button
          className={cn(style.buttonPage, (currentIndex === (page - 1) ? style.buttonPageActive : ''))}
          key={page}
          onClick={()=> updateCurrentPage(page - 1)}
          >
          {page}
          </Button>
        ))}

      {/*  <Button className={cn(style.buttonPage, style.buttonPageActive)}>
          2
        </Button>
        <Button className={style.buttonPage}>3</Button>
        ...
        <Button className={style.buttonPage}>10</Button>*/ }
      </div>
      <Button className={cn(style.control, style.controlNext)} >
        <Icon icon={faAngleRight} />
      </Button>
    </div>
  );
}
