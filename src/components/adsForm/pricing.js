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
 
    const handlePlanPrice = (price) =>{
        setCurrentPlan(price)
    }

    const planAdvantagesTemplate = (avlb,unavlb) =>{
        const avlbTemplate = avlb.map((e,i)=> <p key={i}>{e}</p>)
        const unavlbTemplate = unavlb.map((e,i)=><p key={i} style ={{opacity:0.3}}>{e}</p>)
        return avlbTemplate.concat(unavlbTemplate)
    }
    
    return(
        <div className="adsForm__pricing">
            <h3>Для продолжения необходимо выбрать тариф для публикаций</h3>
            <p>Ознакомиться детальней с тарифами можно тут *MAKE LINK HERE*</p>

            <div role={'group'} aria-labelledby="checkbox-group" className="adsForm__plans">
                {
                    plans.values.map(({id,price,avalible,unavalible,title,bonus}, i)=> 
                    <label key={i} onClick = {()=>handlePlanPrice(price)}>
                        <Field key={i} type="radio" name={plans.name} value={id}/>
                    <h3>{title}</h3>
                    <p>{bonus}</p>
                    {
                        planAdvantagesTemplate(avalible, unavalible)
                    }
                    
                    </label>)
                }
            </div>
            <div className="adsForm__totalPrice">
                Сумма к оплате:
                <span>{currentPlan}</span>
            </div>
        </div>
    )
}

export default Pricing