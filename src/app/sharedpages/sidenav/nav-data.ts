import { INavbarData } from "./helper";


export const navbarData: INavbarData[] = [
    {
        routelink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    {
        routelink: 'admin',
        icon: 'fas fa-user-tie',
        label: 'Administration',
        items: [
            {
                routelink: 'admin/module',
                icon: 'fal fa-check',
                label: 'Modules'
            },
            {
                routelink: 'admin/user',
                icon: 'fal fa-check',
                label: 'Users'
            }
        ]
    },
    {
        routelink: 'CRM',
        icon: 'fas fa-file-alt',
        label: 'CRM Support',
        items: [
            {
                routelink: 'Support',
                icon: 'fal fa-check',
                label: 'Support'
            },
            {
                routelink: 'SupportList',
                icon: 'fal fa-check',
                label: 'Support List'
            },
            {
                routelink: 'EmpInfo',
                icon: 'fal fa-check',
                label: 'Employee Info'
            }
        ]
    },
    {
        routelink: 'merchandise',
        icon: 'fab fa-artstation',
        label: 'Merchandising',
        items: [
            {
                routelink: 'merchandise/knit',
                icon: 'fal fa-check',
                label: 'Knit',
                items: [
                    {
                        routelink: 'merchandise/initialOrder',
                        icon: 'fal fa-diamond',
                        label: 'Order placement'
                    },
                    {
                        routelink: 'merchandise/transaction',
                        icon: 'fal fa-diamond',
                        label: 'CostSheet Prepare' ,
                        items: [
                            {
                                routelink: 'merchandise/fabric',
                                icon: 'fal fa-arrow-right',
                                label: 'Fabric Info'
                            },
                            {
                                routelink: 'merchandise/accessories',
                                icon: 'fal fa-arrow-right',
                                label: 'Accessories Info'
                            },
                            {
                                routelink: 'merchandise/actualCadConsumption',
                                icon: 'fal fa-arrow-right',
                                label: 'Fabric Consumption Cal.'
                            },
                            {
                                routelink: 'merchandise/count',
                                icon: 'fal fa-arrow-right',
                                label: 'Count Wise Ratio'
                            },
                         
                            {
                                routelink: 'merchandise/initialYarnRate',
                                icon: 'fal fa-arrow-right',
                                label: 'Initial Yarn Rate'
                            },
                            {
                                routelink: 'merchandise/fabricWiseProcessCharge',
                                icon: 'fal fa-arrow-right',
                                label: 'Fabric Process Charges'
                            },
                            {
                                routelink: 'merchandise/orderWiseOtherCharge',
                                icon: 'fal fa-arrow-right',
                                label: 'Other Charges'
                            },
                           
                            {
                                routelink: 'merchandise/picturesAndOthersSummary',
                                icon: 'fal fa-arrow-right',
                                label: 'Pictures And Order Summary'
                            },
                            {
                                routelink: 'merchandise/colorWiseQuantityBreakdown',
                                icon: 'fal fa-arrow-right',
                                label: 'Color Wise Quantity Breakdown'
                            }
                            
                        ]  
                    },
                    {
                        routelink: 'merchandise/approval',
                        icon: 'fal fa-diamond',
                        label: 'Approval Process',
                        items: [
                            {
                                routelink: 'merchandise/costSheetApprovalForMerchandisingHead',
                                icon: 'fal fa-arrow-right',
                                label: 'Cost Sheet Approval(MH)'
                            },
                            {
                                routelink: 'merchandise/costSheetApprovalForMD',
                                icon: 'fal fa-arrow-right',
                                label: 'Cost Sheet Approval(MD)'
                            },
                        ]
                    },
                    {
                        routelink: 'merchandise/yarn',
                        icon: 'fal fa-diamond',
                        label: 'Fabric Booking',
                        items: [
                            {
                                routelink: 'merchandise/fabricBooking',
                                icon: 'fal fa-arrow-right',
                                label: 'Fabric Booking'
                            },
                            {
                                routelink: 'merchandise/report2',
                                icon: 'fal fa-arrow-right',
                                label: 'Reports'
                            }
                        ]  
                    },
                    {
                        routelink: 'merchandise/yarn',
                        icon: 'fal fa-diamond',
                        label: 'Yarn Booking',
                        items: [
                            {
                                
                                routelink: 'merchandise/yarnBooking',
                                icon: 'fal fa-arrow-right',
                                label: 'Yarn Booking'
                                
                            },
                            {
                                routelink: 'merchandise/report2',
                                icon: 'fal fa-arrow-right',
                                label: 'Reports'
                            }
                        ]  
                    },
                    {
                        routelink: 'merchandise/accessoriesBooking',
                        icon: 'fal fa-diamond',
                        label: 'Accessories Boking'
                    },
                    {
                        routelink: 'merchandise/approval',
                        icon: 'fal fa-diamond',
                        label: 'Approval'  
                    },
                    {
                        routelink: 'merchandise/report',
                        icon: 'fal fa-diamond',
                        label: 'Reports',
                        items: [
                            {
                                routelink: 'merchandise/costSheet',
                                icon: 'fal fa-arrow-right',
                                label: 'Cost Sheet Report'
                            },
                            {
                                routelink: 'merchandise/po',
                                icon: 'fal fa-arrow-right',
                                label: 'PO Report'
                            },
                            {
                                routelink: 'merchandise/pi',
                                icon: 'fal fa-arrow-right',
                                label: 'PI Report'
                            }   
                        ]    
                    }
                ]
            },
            {
                routelink: 'merchandise/woven',
                icon: 'fal fa-check',
                label: 'Woven'
            },
            
        ]

    },
    {
        routelink: 'commercial',
        icon: 'fas fa-shopping-cart',
        label: 'Sales & Commercial',
        items: [
            {
                routelink: 'commercial/general',
                icon: 'fal fa-check',
                label: 'General',
                items: [
                    {
                        routelink: 'commercial/buyerEntry',
                        icon: 'fal fa-diamond',
                        label: 'Buyer Entry' 
                    },
                    {
                        routelink: 'commercial/supplierEntry',
                        icon: 'fal fa-diamond',
                        label: 'Supplier Entry' 
                    },
                    {
                        routelink: 'commercial/bankEntry',
                        icon: 'fal fa-diamond',
                        label: 'Bank Entry' 
                    },
                    {
                        routelink: 'commercial/salesContractEntry',
                        icon: 'fal fa-diamond',
                        label: 'Sales Contract Entry' 
                    },
                    {
                        routelink: 'commercial/masterLcEntry',
                        icon: 'fal fa-diamond',
                        label: 'Master LC Entry' 
                    },
                    {
                        routelink: 'commercial/scAndMasterLcGroupEntry',
                        icon: 'fal fa-diamond',
                        label: 'SC & Master LC Group Entry' 
                    }
                ]
            },
            {
                routelink: 'commercial/commercialApproval',
                icon: 'fal fa-check',
                label: 'Commercial Approval',
                items: [
                    {
                        routelink: 'commercial/salesContractApproval',
                        icon: 'fal fa-diamond',
                        label: 'Sales Contract Approval' 
                    },
                    {
                        routelink: 'commercial/masterLcApproval',
                        icon: 'fal fa-diamond',
                        label: 'Master LC Approval' 
                    }
                ]
            },
            {
                routelink: 'commercial/amendmentEntry',
                icon: 'fal fa-check',
                label: 'Amendment Entry',
                items: [
                    
                ]
            },
            {
                routelink: 'commercial/reports',
                icon: 'fal fa-check',
                label: 'Reports',
                items: [
                    
                ]
            }
            // {
            //     routelink: 'commercial/buyer',
            //     icon: 'fal fa-check',
            //     label: 'Buyers Info'
            // },
            // {
            //     routelink: 'commercial/supplier',
            //     icon: 'fal fa-check',
            //     label: 'Suppliers Info'
            // }
        ]
        
    },
    {
        routelink: 'dyeingFactory',
        icon: 'fas fa fa-cubes',
        label: 'Dyeing Factory',
        items: [
            {
                routelink: 'dyeingFactory/grayFabricReceive',
                icon: 'fal fa-check',
                label: 'Gray Fabric Receive'
            },
            {
                routelink: 'dyeingFactory/batchSection',
                icon: 'fal fa-check',
                label: 'Batch Section'
            }
        ]
    },
    {
        routelink: 'inventory',
        icon: 'fas fa-file-alt',
        label: 'Inventory'
    },
    {
        routelink: 'accountsFinance',
        icon: 'fas fa-balance-scale',
        label: 'Accounts & Finance',
        items: [
            {
                routelink: 'accountsFinance/weeklyBudget',
                icon: 'fal fa-check',
                label: 'Weekly Budget'
            },
            {
                routelink: 'accountsFinance/weeklyBudgetApprovalAccManager',
                icon: 'fal fa-check',
                label: 'Weekly Budget Approval(account manager)'
            },
            {
                routelink: 'accountsFinance/weeklyBudgetApproval',
                icon: 'fal fa-check',
                label: 'Weekly Budget Approval(MD)'
            },
            {
                routelink: 'accountsFinance/weeklyBudgetReport',
                icon: 'fal fa-check',
                label: 'Weekly Budget Report'
            }
        ]
    },
    {
        routelink: 'production',
        icon: 'fas fa-tshirt',
        label: 'Production'
    },
    {
        routelink: 'login',
        icon: 'fas fa-user',
        label: 'Login'
    },
    {
        routelink: 'register',
        icon: 'fas fa-user-friends',
        label: 'Register'
    },
    {
        routelink: 'forgotpassword',
        icon: 'fas fa-user',
        label: 'Forgot Password'
    },
    {
        routelink: 'resetpassword',
        icon: 'fas fa-user',
        label: 'Reset Password'
    }
];