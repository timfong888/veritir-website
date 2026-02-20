"use server";

export interface ContactState {
  success: boolean;
  message: string;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const organization = formData.get("organization") as string;
  const role = formData.get("role") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !organization || !role) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // MVP: log to console (visible in Vercel function logs)
  console.log("--- VERITIR Contact Submission ---");
  console.log({ name, email, organization, role, message });
  console.log("----------------------------------");

  return {
    success: true,
    message: "Thanks! We'll be in touch soon.",
  };
}
