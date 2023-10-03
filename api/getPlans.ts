export const getPlans = async () => {
  console.log('[getPlans] - init')
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/cardsData.json`);
    if (!res.ok) {
      throw new Error(`[getPlans] - Failed to fetch data: ${res.status}`);
    }
    const plansData: Data = await res.json();
    
    return plansData.plans;
  } catch (error) {
    console.error("[getPlans] - Error fetching plans:", error);
    throw error;
  }
};
