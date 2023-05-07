exports.main = async (context, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  sendResponse({
    sections: [
      {
        type: 'text',
        text: 'Add line items to this deal from available inventory.',
      },
      {
        type: 'button',
        text: 'Build This Deal',
        onClick: {
          type: 'IFRAME',
          width: 1100,
          height: 700,
          uri: 'https://test-portal-growthpanda-3403744.hs-sites.com/deal-builder?deal=' + hs_object_id,
        },
      },
    ], 
  });
};
