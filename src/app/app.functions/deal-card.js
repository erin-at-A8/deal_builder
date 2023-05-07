exports.main = async (context, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  sendResponse({
    sections: [
      {
        type: 'text',
        text: 'Add line items to this deal from available placements.',
      },
      {
        type: 'button',
        text: 'Build This Deal',
        onClick: {
          type: 'IFRAME',
          width: 700,
          height: 400,
          uri: 'https://hubnerd.erincallie.com/deal-builder?deal=' + hs_object_id,
        },
      },
    ], 
  });
};
