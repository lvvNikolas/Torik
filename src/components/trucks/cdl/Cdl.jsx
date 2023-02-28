import React from 'react'
import './cdl.css'

const trucks_main_slogan = () => {
  return (
    <>
      <h1 className="cdl_main_title">CDL работа в США</h1>

      <div className="cdl_wrapper">
          <div className="cdl_filter">
            Фильтры
          </div>
          <div className="cdl_table_ads">
              <h2 className="cdl_table_ads_title">
                Ищем бригадира и людей с опытом на вышки сотовой связи
              </h2>
              <p className="cdl_table_ads_price">200$/в нед</p>
                <p className='cdl_description'>
                  Описание Вакансиии: Ищем бригадира и людей с опытом на вышки сотовой связи, ЗП 350$ в день
                </p>

                <div className="cdl_sub_table">
                    <div className="cdl_sub_table_item">
                        <p className="cdl_sub_table_date">
                          Дата публикации 14.02.2023
                        </p>
                    </div>

                    <div className="cdl_sub_table_item">
                        <p className="cdl_sub_table_category">
                          Кабельщики
                        </p>
                    </div>

                    <div className="cdl_sub_table_item">
                        <p className="cdl_sub_table_status">
                          Super Vip
                        </p>
                    </div>

                </div>

          </div>
          <div className="cdl_banner__ads">
              <p className="cdl_banner_ads_text">Реклама</p>
          
          </div>
      </div>
    </>
  )
}

export default trucks_main_slogan