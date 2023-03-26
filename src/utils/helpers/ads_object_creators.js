export const createJobAdsObject = (id, data) =>{
    
    const date = new Date()

    const {
        type = "JOBS",
        jobTitle = '',
        jobOwnername  = '',
        jobCategory,
        jobCompanyName  = '',
        jobOwnerPhone  = '',
        jobOwnerEmail  = '',
        jobLinks = [],
        jobLocation  = '',
        jobPlan,
        shortJobDescription = '',
        jobDescription  = '',
        jobSearch = '',
        jobAdress = '',
        jobSalary  = '',
        jobTime = [],
        jobExtra = [],
        isBanner = false
    } = data

    return {
        Type:type,
        Id:id,
        JobTitle: jobTitle,
        OwnerName: jobOwnername,
        Category: jobCategory,
        CompanyName: jobCompanyName,
        PhoneNumber: jobOwnerPhone,
        Email:jobOwnerEmail,
        SocialLink: jobLinks,
        City: jobLocation,
        Adress:jobAdress,
        AdsStatus: jobPlan,
        ShortJobDescription:shortJobDescription,
        JobDescription: jobDescription,
        JobSearch: jobSearch,
        JobExtra:jobExtra,
        Date: date,
        JobTime: jobTime,
        Price: jobSalary,
        isBanner:isBanner,
    }
}