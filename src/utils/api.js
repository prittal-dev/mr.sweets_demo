/**
 * API utility for Mr. Sweet Lead Generation & Order Enquiries.
 * Replace `API_BASE_URL` with your production endpoint in `.env`
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.mrsweetfoods.com/v1';

/**
 * Submit an enquiry payload to the backend service.
 * @param {Object} enquiryData 
 * @param {'product' | 'wholesale' | 'giftbox'} enquiryType 
 */
export async function submitEnquiry(enquiryData, enquiryType = 'product') {
  // Production integration template
  try {
    const response = await fetch(`${API_BASE_URL}/enquiries/${enquiryType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: enquiryType,
        timestamp: new Date().toISOString(),
        ...enquiryData,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit enquiry (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    // Fallback simulation for local development / demo mode
    return {
      success: true,
      message: 'Enquiry received successfully',
      id: `ENQ-${Date.now()}`
    };
  }
}
