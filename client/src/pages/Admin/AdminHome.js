import React from 'react'
import Layout from '../../components/Shared/Form/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const {user} =useSelector((state)=>state.auth)
  return (
    <Layout>
     <div className='container'>
        <div className='d-flex flex-column mt-4'>
            <h1>
                Welcome Admin <i className='text-success'>{user?.name}</i>
            </h1>
            <h3>Manage Blood Bank App</h3>
            <hr/ >
            <p>As an administrator, you play a pivotal role in managing the operations of our blood bank efficiently and effectively. This platform provides you with the tools and functionalities necessary to ensure smooth functioning and optimal utilization of our resources. Below are the key features and functionalities available to you:


<b>Dashboard: </b>The dashboard provides an overview of critical metrics such as current blood inventory levels, donor statistics, recent transactions, and pending requests. It serves as a central hub for monitoring the overall performance of the blood bank.

<b>Manage Donors: </b>In this section, you can add, edit, or remove donor records. Keeping donor information up-to-date is crucial for maintaining a reliable supply of blood. You can also track donor eligibility criteria, donation history, and contact details.

<b>Manage Blood Inventory:</b> This module allows you to manage the inventory of blood units efficiently. You can track the quantity of each blood type available, set minimum thresholds for stock levels, and receive alerts for low inventory. Additionally, you can record details of blood units received, issued, or discarded.

<b>Manage Blood Requests: </b>Here, you can process incoming requests for blood units from hospitals, clinics, or other healthcare facilities. You can view, approve, or reject requests based on available inventory and priority. Real-time updates ensure timely response to urgent requests.

<b>Generate Reports:</b> Generate comprehensive reports on various aspects of blood bank operations, including donor demographics, blood inventory status, transaction history, and utilization trends. These reports provide valuable insights for strategic decision-making and regulatory compliance.

<b>User Management: </b> Admins can manage user accounts and permissions within the system. You can create, modify, or deactivate accounts for staff members according to their roles and responsibilities. Access controls ensure data security and confidentiality.

<b>System Settings: </b>Customize system settings such as blood type definitions, donation criteria, notification preferences, and email templates. Fine-tune the system to align with the specific requirements and protocols of your blood bank.

<b>Audit Trail: </b> Maintain an audit trail of all system activities and user interactions for accountability and transparency. Track changes made to donor records, inventory transactions, and administrative settings to ensure data integrity and compliance with regulatory standards.

<b>Support and Documentation: </b> Access help resources, FAQs, and user manuals to assist with system navigation and troubleshooting. Our support team is also available to address any technical issues or inquiries you may have.

<b>Thank you for your dedication to managing our blood bank effectively. Your contributions are instrumental in saving lives and making a positive impact on the community. If you have any feedback or suggestions for improving the system, please don't hesitate to reach out.</b></p>
        </div>
     </div>
    </Layout>
  )
}

export default AdminHome
