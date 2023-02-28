import { Field } from "formik"
import { useEffect, useState } from "react"
import { PricingPlansJob, PricingPlansRent, PricingPlansService } from "../../constants/pricing"

const Pricing = ({adsType}) =>{
     
    const [plans, setPlans] = useState({
        name:'',
        values:[]
    })

    const [currentPlan, setCurrentPlan] = useState('')
     
    useEffect(()=>{
        if(adsType === "JOB"){
            setPlans({
                name:'jobPlans',
                values:PricingPlansJob
            })
        }
        if(adsType === "RENT"){
            setPlans({
                name:'rentPlans',
                values:PricingPlansRent
            })
        }
        if(adsType === "SERVICES"){
            setPlans({
                name:'servicesPlans',
                values:PricingPlansService
            })
        }
    },[])
 
    const handlePlanPrice = (id,price) =>{
        setCurrentPlan({
            id:id,
            price:price
        })
    }

    const planAdvantagesTemplate = (avlb,unavlb) =>{
        // Ключ нужен для решения конфликта одинаковых ключей из массивов
        let key = 0
        const avlbTemplate = avlb.map((e)=> {
            key += 1
            return  <p key={key}>{e}</p>
        })
        const unavlbTemplate = unavlb.map((e,i)=>{
            key += 1
            return <p key={key} style ={{opacity:0.3}}>{e}</p>
        })
        return avlbTemplate.concat(unavlbTemplate)
    }
    
    const classNameHandler = (id) =>{
        return id === currentPlan?.id ?
         'adsForm__plan-item adsForm__plan-item--selected'
         : 'adsForm__plan-item'
    }
    
    return(
        <div className="adsForm__pricing">
            <h3>Для продолжения необходимо выбрать тариф для публикаций</h3>
            <p>Ознакомиться детальней с тарифами можно тут *MAKE LINK HERE*</p>

            <div role={'group'} aria-labelledby="checkbox-group" className="adsForm__plans">
                {
                    plans.values.map(({id,price,avalible,unavalible,title,bonus}, i)=> {
                    return <label key={i} onClick = {()=>{handlePlanPrice(i,price)}} className = {classNameHandler(i)}>
                        <Field type="radio" name={plans.name} value={id}/>
                        <h3 className="adsForm__plan-title">{title}</h3>
                        <p className="adsForm__plan-bonus">{bonus}</p>
                        <div className="adsForm__plan-list">
                            {
                                planAdvantagesTemplate(avalible, unavalible)
                            }
                        </div>
                    </label>
                    })
                }
            </div>
            <div className="adsForm__totalPrice">
                Сумма к оплате:
                <span> {currentPlan.price}</span>
            </div>
        </div>
    )
}

export default Pricing