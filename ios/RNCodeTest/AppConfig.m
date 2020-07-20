#import "AppConfig.h"
@implementation AppConfig
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(getPListValue:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
  @try{
    NSString* paramValue = [[[NSBundle mainBundle] infoDictionary] valueForKey:param];
    if(paramValue == nil)
      paramValue = @"";
    callback(@[[NSNull null], paramValue]);
 }
 @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
 }
}
@end