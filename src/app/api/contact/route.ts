import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, insuranceType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !insuranceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format insurance type for display
    const insuranceTypeMap: Record<string, string> = {
      life: "Life Insurance",
      health: "Health Insurance",
      vehicle: "Vehicle Insurance",
      property: "Property Insurance",
      other: "Other"
    }

    // Create email content
    const emailContent = `
New Insurance Inquiry from SKS Investment Solutions Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Insurance Type: ${insuranceTypeMap[insuranceType] || insuranceType}
Message: ${message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim()

    // Log the inquiry (in production, you would send this via email service)
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log(emailContent)
    console.log("===================================")

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "noreply@sksinvesmentsolutions.com",
    //   to: "info@sksinvesmentsolutions.com",
    //   subject: `New Insurance Inquiry from ${name}`,
    //   text: emailContent,
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your inquiry! We will contact you soon." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    )
  }
}
