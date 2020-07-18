#import "AppConfig.h"
@interface AppConfig()
@end

@implementation AppConfig
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getPListValue:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
  NSString* paramValue = [[[NSBundle mainBundle] infoDictionary] valueForKey:param];
  if(paramValue == nil)
    paramValue = @"";
  callback(@[[NSNull null], paramValue]);
}
@end