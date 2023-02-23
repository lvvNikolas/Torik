import { Field } from "formik"
import { useEffect, useState } from "react"
import { PricingPlansJob, PricingPlansRent, PricingPlansService } from "../../constants/pricing"

const Pricing = ({adsType}) =>{
     
    const [plans, setPlans] = useState({
        name:'',
        values:[]
    })
     
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
 

    console.log(plans)

    return(
        <div className="adsForm__pricing">
            <h3>Для продолжения необходимо выбрать тариф для публикаций</h3>
            <p>Ознакомиться детальней с тарифами можно тут *MAKE LINK HERE*</p>

            <div role={'group'} aria-labelledby="checkbox-group" className="adsForm__plans">
                {
                    plans.values.map((e, i)=>  
                    <label key={i}>
                        <Field key={i} type="radio" name={plans.name} value={e.id} checked />
                    {e.title}
                </label>)
                }
            </div>
        </div>
    )
}

export default Pricing